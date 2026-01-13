/**
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */
import { memo, useState } from 'react';
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
import { Checkbox } from '@renderer/components/ui/checkbox';
import { Label } from '@renderer/components/ui/label';

interface FreeTrialDialog {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export const FreeTrialDialog = memo(
  ({ open, onOpenChange, onConfirm }: FreeTrialDialog) => {
    const [dontShowAgain, setDontShowAgain] = useState(false);

    const onCheck = (status: boolean) => {
      setDontShowAgain(status);
    };

    const onClick = () => {
      if (dontShowAgain) {
        localStorage.setItem('isAgreeFreeTrialAgreement', 'true');
      }
      onConfirm();
    };

    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Угода про безкоштовну пробну версію
            </AlertDialogTitle>
            <AlertDialogDescription className="hidden" />
            <div className="text-muted-foreground text-sm">
              <p>
                У рамках нашого дослідження ми пропонуємо 30-хвилинну
                безкоштовну пробну версію нашого хмарного сервісу на базі
                Volcano Engine, де ви можете випробувати UI-TARS з віддаленими
                операціями комп&apos;ютера та браузера без купівлі модельного
                сервісу та обчислювальних ресурсів.
              </p>
              <p className="my-4">
                <b>
                  Погоджуючись використовувати цей сервіс, ваші дані будуть
                  передані на сервери. Зверніть увагу на це.
                </b>{' '}
                Відповідно до відповідних нормативних актів, вам слід уникати
                введення будь-якої конфіденційної особистої інформації. Усі
                записи на серверах використовуватимуться виключно для наукових
                досліджень і не використовуватимуться для інших цілей.
              </p>
              <p className="my-4">
                Дякуємо за вашу підтримку дослідницького проекту UI-TARS!
              </p>
              <div className="flex items-center gap-2 mb-4 text-foreground">
                <Checkbox
                  id="free"
                  checked={dontShowAgain}
                  onCheckedChange={onCheck}
                />
                <Label htmlFor="free">Я погоджуюсь. Більше не показувати</Label>
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Скасувати</AlertDialogCancel>
            <AlertDialogAction onClick={onClick}>Погодитись</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
);
