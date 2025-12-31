insert into gyms (id, name)
values ('11111111-1111-1111-1111-111111111111', 'FitLife Gym');

insert into members (id, gym_id, first_name, last_name, email)
values
  ('22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'John', 'Doe', 'john@example.com');

insert into membership_plans (id, gym_id, name, price_cents, interval)
values
  ('33333333-3333-3333-3333-333333333333', '11111111-1111-1111-1111-111111111111', 'Monthly', 4000, 'month');

insert into member_subscriptions (member_id, plan_id, status)
values
  ('22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'active');
