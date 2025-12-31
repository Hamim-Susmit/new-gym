create table if not exists gyms (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text,
  timezone text default 'UTC',
  created_at timestamptz default now()
);

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  created_at timestamptz default now()
);

create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  gym_id uuid references gyms(id),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists staff (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  gym_id uuid references gyms(id),
  role text not null,
  created_at timestamptz default now()
);

create table if not exists membership_plans (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid references gyms(id),
  name text not null,
  price_cents integer not null,
  interval text not null,
  created_at timestamptz default now()
);

create table if not exists member_subscriptions (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id),
  plan_id uuid references membership_plans(id),
  status text not null,
  started_at timestamptz default now(),
  ends_at timestamptz
);

create table if not exists checkin_tokens (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id),
  token text not null unique,
  expires_at timestamptz not null,
  created_at timestamptz default now()
);

create table if not exists checkins (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id),
  gym_id uuid references gyms(id),
  checked_in_at timestamptz default now()
);

create table if not exists classes (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid references gyms(id),
  name text not null,
  description text,
  capacity integer not null default 20,
  created_at timestamptz default now()
);

create table if not exists class_schedules (
  id uuid primary key default gen_random_uuid(),
  class_id uuid references classes(id),
  instructor text,
  starts_at timestamptz not null,
  ends_at timestamptz not null
);

create table if not exists class_bookings (
  id uuid primary key default gen_random_uuid(),
  schedule_id uuid references class_schedules(id),
  member_id uuid references members(id),
  status text not null default 'booked',
  created_at timestamptz default now()
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id),
  amount_cents integer not null,
  currency text not null default 'usd',
  status text not null,
  provider text not null default 'stripe',
  created_at timestamptz default now()
);

create table if not exists invoices (
  id uuid primary key default gen_random_uuid(),
  payment_id uuid references payments(id),
  invoice_number text not null,
  issued_at timestamptz default now(),
  due_at timestamptz
);
