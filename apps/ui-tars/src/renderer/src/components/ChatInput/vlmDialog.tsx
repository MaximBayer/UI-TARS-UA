import { Button } from '@renderer/components/ui/button';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@renderer/components/ui/dialog';

interface VLMDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VLMDialog({ open, onOpenChange }: VLMDialogProps) {
  const handleConfigureClick = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Потрібна конфігурація VLM</DialogTitle>
          <DialogDescription className="text-foreground">
            Відсутня конфігурація VLM. Оператору потрібні ці налаштування для
            роботи. Бажаєте налаштувати параметри VLM?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Скасувати</Button>
          </DialogClose>
          <Button type="button" onClick={handleConfigureClick}>
            Підтвердити
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
