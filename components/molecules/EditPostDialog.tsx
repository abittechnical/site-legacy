import React from 'react'
import { Dialog } from '@headlessui/react'

export type EditPostDialogProps = {
  show: boolean
  onHide: () => void
  onEdit: () => void
}

const EditPostDialog = ({ show, onEdit, onHide }: EditPostDialogProps) => {
  return (
    <Dialog open={show} onClose={onHide} className={`relative z-50`}>
      <div className="fixed inset-0 bg-neutral-900/50" aria-hidden />
      <div className="fixed inset-0 flex items-center justify-center bg-neutral-900/50" aria-hidden>
        <Dialog.Panel className="max-w-md rounded-lg border bg-white shadow">
          <div className="p-8">
            <Dialog.Title className="mb-4 text-xl font-semibold">Edit post</Dialog.Title>
            <Dialog.Description className="text-base font-medium text-neutral-600">
              Welcome to the community! I can&apos;t wait to read your contributions, but first tell me your Github
              handle so you can get credit.
            </Dialog.Description>
            <div className="mt-8 flex w-full justify-end">
              <button
                onClick={onEdit}
                className="display-text rounded-md border bg-white px-6 py-3 text-lg uppercase tracking-wide shadow-sm hover:bg-neutral-900
                focus:outline-none active:bg-neutral-900"
              >
                Continue to edit
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default EditPostDialog
