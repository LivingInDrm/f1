export interface TeamColors {
  primary: string
  secondary: string
  accent?: string
}

export interface Team {
  id: string
  name: string
  fullName: string
  principal: string
  engine: string
  headquarters: string
  country: string
  championships: number
  raceWins: number
  founded: number
  colors: TeamColors
  achievements: string[]
}

export interface Driver {
  id: string
  name: string
  firstName: string
  lastName: string
  number: number
  teamId: string
  nationality: string
  countryCode: string
  dateOfBirth: string
  championships: number
  wins: number
  podiums: number
  polePositions: number
  fastestLaps: number
  careerPoints: number
  drivingStyle: string
  highlights: string[]
}
