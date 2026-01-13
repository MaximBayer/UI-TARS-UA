/**
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@renderer/components/ui/alert-dialog';

interface DeleteSessionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export function DeleteSessionDialog({
  open,
  onOpenChange,
  onConfirm,
}: DeleteSessionDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Видалити сеанс</AlertDialogTitle>
          <AlertDialogDescription>
            Поточний сеанс виконується. Перехід примусово зупинить сеанс.
            Все одно продовжити?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Скасувати</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600"
            onClick={onConfirm}
          >
            Видалити
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
