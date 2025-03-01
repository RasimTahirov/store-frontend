import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IUser } from "@/entities/auth/types/type"
import { useState } from "react"
import { deleteUser, updateRole } from "../api/api"
import { toast, Toaster } from "sonner"

interface ModalTableProps {
  openDialog: boolean
  setOpenDialog: (open: boolean) => void
  userData: IUser | null
}

const ModalTable: React.FC<ModalTableProps> = ({ openDialog, setOpenDialog, userData }) => {
  const [roleValue, setRoleValue] = useState<string>('')

  const handleSelectChange = (value: string) => {
    setRoleValue(value);
  };

  const handleSaveRole = async (e: React.FormEvent, id: string | undefined, data: string) => {
    e.preventDefault()

    await updateRole(id, data);
    setOpenDialog(false)
    toast.success('Роль пользователя изменена')
  }

  const handleDeleteUser = async (id: string | undefined) => {
    await deleteUser(id)
    setOpenDialog(false)
    toast.success('Пользователь удалён') // Возможно перенести ответы с сервера сюда
  }

  return (
    <>
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Данные пользователя</DialogTitle>
        </DialogHeader>
        <div className="w-full flex-col">
          <div className="userData-container">
            <label htmlFor="userId">id</label>
            <input className="userData-input" id="userId" type="text" value={userData?.id} readOnly disabled />
          </div>
          <div className="userData-container">
            <label htmlFor="userName">Имя</label>
            <input className="userData-input" id="userName" type="text" value={userData?.name} readOnly disabled />
          </div>
          <div className="userData-container">
            <label htmlFor="userSurname">Фамилия</label>
            <input className="userData-input" id="userSurname" type="text" value={userData?.surname} readOnly disabled />
          </div>
          <div className="userData-container">
            <label htmlFor="userEmail">Почта</label>
            <input className="userData-input" id="userEmail" type="text" value={userData?.email} readOnly disabled />
          </div>
          <div className="userData-container">
            <label htmlFor="userRole">Роль</label>
            <input className="userData-input" id="userRole" type="text" value={userData?.role} readOnly disabled />
          </div>
        </div>

        <form onSubmit={(e) => handleSaveRole(e, userData?.id, roleValue)}>
          <div className="mb-2.5">
            <Select value={roleValue} onValueChange={handleSelectChange}>
              <SelectTrigger >
                <SelectValue placeholder="Изменить роль" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {userData?.role === "USER" ? <SelectItem value="ADMIN">ADMIN</SelectItem> : <SelectItem value="USER">USER</SelectItem>}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" type="submit" disabled={!roleValue}>Сохранить роль</Button>
        </form>

        <Button className="w-full" variant="destructive" onClick={() => handleDeleteUser(userData?.id)}>Удалить пользователя</Button>
      </DialogContent>
    </Dialog>
    <Toaster richColors/>
    </>
  )
}

export default ModalTable