create table if not exists gyms (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz default now()
);

create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid references gyms(id),
  first_name text not null,
  last_name text not null,
  email text not null unique,
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

create table if not exists checkins (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id),
  gym_id uuid references gyms(id),
  checked_in_at timestamptz default now()
);
