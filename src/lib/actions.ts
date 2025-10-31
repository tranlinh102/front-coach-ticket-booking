'use server';
import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({    
    invalid_type_error: 'Vui lòng chọn 1 khách hàng.',
}),
  price_paid: z.coerce.number()   
    .gt(0, { message: 'Vui lòng nhập số tiền lớn hơn 0.'
}),
  status: z.enum(['booked', 'paid' ,'canceled'],{
    invalid_type_error: 'Vui lòng chọn đủ thông tin.',
}),
  date: z.string(),
});
 
const CreateTicket = FormSchema.omit({ id: true, date: true });
const UpdateTicket = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    price_paid?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createTicket(prevState: State, formData: FormData) {
  const validatedFields = CreateTicket.safeParse({
    customerId: formData.get('customerId'),
    price_paid: formData.get('price_paid'),
    status: formData.get('status'),
    tripId: formData.get('tripId'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Ticket.',
    };
  }

  const { customerId, price_paid, status } = validatedFields.data;
  const priceInCents = price_paid * 100;
  const date = new Date().toISOString().split('T')[0];
 
  try {
    await sql`
      INSERT INTO tickets (customer_id, price_paid, status, date)
      VALUES (${customerId}, ${priceInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Ticket.',
    };
  }
 
  revalidatePath('/dashboard/tickets');
  redirect('/dashboard/tickets');
}

export async function updateTicket(id: string, prevState: State, formData: FormData) {
  const validatedFields = UpdateTicket.safeParse({
    customerId: formData.get('customerId'),
    price_paid: formData.get('price_paid'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, price_paid, status } = validatedFields.data;
  const priceInCents = price_paid * 100;
 
  try {
    await sql`
        UPDATE tickets
        SET customer_id = ${customerId}, price_paid = ${priceInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    console.error(error);
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/dashboard/tickets');
  redirect('/dashboard/tickets');
}

export async function deleteTicket(id: string) {

  await sql`DELETE FROM tickets WHERE id = ${id}`;
  revalidatePath('/dashboard/tickets');
}