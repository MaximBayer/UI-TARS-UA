/**
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */
import { memo } from 'react';
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

interface TerminateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export const TerminateDialog = memo(
  ({ open, onOpenChange, onConfirm }: TerminateDialogProps) => {
    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Завершити поточний екземпляр?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Після завершення поточний віддалений екземпляр буде повернуто,
            а завдання буде призупинено
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Скасувати</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600"
            onClick={onConfirm}
          >
            Завершити
          </AlertDialogAction>
        </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
);
