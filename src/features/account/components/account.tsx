'use client'

import { AppDispatch, RootState } from "@/app/store/store"
import { logout, userDataThunk } from "@/features/auth/api/api"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Account = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { user } = useSelector((state: RootState) => state.auth)

  const handleLogout = async () => {
    await logout()
  }

  useEffect(() => {
    dispatch(userDataThunk())
  }, [dispatch])

  return (
    <div className="grid">
      <div>Account</div>
      <div>{user?.name}</div>
      {user?.role === "ADMIN" ? <Link href="admin">Админ панель</Link> : null}
      <div role="button" onClick={handleLogout}>Выход</div>
    </div>
  )
}

export default Account