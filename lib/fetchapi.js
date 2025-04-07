'use server'

import { headers } from "next/headers"

export const getIp = async () => {
  const headersList = await headers()
  const real = await headersList.get("x-real-ip")
  const forward = await headersList.get("x-forwarded-for")
  const host = await headersList.get("host")
  return {
    real,
    forward,
    host
  }
}
