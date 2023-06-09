'use client'

import { createContext, useContext, useState } from 'react'
import { Session, createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database'

type MaybeSession = Session | null

type SupabaseContext = {
  supabase: SupabaseClient<Database>
  session: MaybeSession
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({
  children,
  session,
}: {
  children: React.ReactNode
  session: MaybeSession
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient<Database>())

  return (
    <Context.Provider value={{ session, supabase }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }

  return context
}