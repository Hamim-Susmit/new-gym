insert into gyms (id, name)
values ('11111111-1111-1111-1111-111111111111', 'FitLife Gym');

insert into users (id, email, full_name)
values
  ('aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'owner@fitlife.com', 'Olivia Owner'),
  ('bbbbbbb2-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'staff@fitlife.com', 'Sam Staff'),
  ('ccccccc3-cccc-cccc-cccc-cccccccccccc', 'john@example.com', 'John Doe');

insert into members (id, user_id, gym_id, first_name, last_name, email, status)
values
  ('22222222-2222-2222-2222-222222222222', 'ccccccc3-cccc-cccc-cccc-cccccccccccc', '11111111-1111-1111-1111-111111111111', 'John', 'Doe', 'john@example.com', 'active');

insert into staff (id, user_id, gym_id, role)
values
  ('ddddddd4-dddd-dddd-dddd-dddddddddddd', 'aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', 'owner'),
  ('eeeeeee5-eeee-eeee-eeee-eeeeeeeeeeee', 'bbbbbbb2-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '11111111-1111-1111-1111-111111111111', 'staff');

insert into membership_plans (id, gym_id, name, price_cents, interval)
values
  ('33333333-3333-3333-3333-333333333333', '11111111-1111-1111-1111-111111111111', 'Monthly', 4000, 'month');

insert into member_subscriptions (member_id, plan_id, status)
values
  ('22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'active');

insert into classes (id, gym_id, name, description, capacity)
values
  ('44444444-4444-4444-4444-444444444444', '11111111-1111-1111-1111-111111111111', 'Morning HIIT', 'High-intensity interval training', 18);

insert into class_schedules (id, class_id, instructor, starts_at, ends_at)
values
  ('55555555-5555-5555-5555-555555555555', '44444444-4444-4444-4444-444444444444', 'Coach Lee', now() + interval '1 day', now() + interval '1 day' + interval '1 hour');

insert into class_bookings (schedule_id, member_id, status)
values
  ('55555555-5555-5555-5555-555555555555', '22222222-2222-2222-2222-222222222222', 'booked');

insert into checkin_tokens (member_id, token, expires_at)
values
  ('22222222-2222-2222-2222-222222222222', 'sample-token', now() + interval '2 minutes');

insert into payments (id, member_id, amount_cents, status, provider)
values
  ('66666666-6666-6666-6666-666666666666', '22222222-2222-2222-2222-222222222222', 4000, 'paid', 'stripe');

insert into invoices (payment_id, invoice_number, due_at)
values
  ('66666666-6666-6666-6666-666666666666', 'INV-1001', now() + interval '30 days');
