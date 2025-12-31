export type MembershipStatus = 'active' | 'inactive' | 'expired'

export type MemberProfile = {
  id: string
  firstName: string
  lastName: string
  email: string
  status: MembershipStatus
}
