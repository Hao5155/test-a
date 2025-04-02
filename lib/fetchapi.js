'use server'

import { headers } from "next/headers"

export const getIp = async () => {
  return (await headers()).get("x-forwarded-for")
}