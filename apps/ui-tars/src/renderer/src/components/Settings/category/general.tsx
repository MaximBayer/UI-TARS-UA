import { useState } from 'react';
import { Button } from '@renderer/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { api } from '@/renderer/src/api';
import { toast } from 'sonner';

import { REPO_OWNER, REPO_NAME } from '@main/shared/constants';

export const GeneralSettings = () => {
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateDetail, setUpdateDetail] = useState<{
    currentVersion: string;
    version: string;
    link: string | null;
  } | null>();

  const handleCheckForUpdates = async () => {
    setUpdateLoading(true);
    try {
      const detail = await api.checkForUpdatesDetail();
      console.log('detail', detail);

      if (detail.updateInfo) {
        setUpdateDetail({
          currentVersion: detail.currentVersion,
          version: detail.updateInfo.version,
          link: `https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/tag/v${detail.updateInfo.version}`,
        });
        return;
      } else if (!detail.isPackaged) {
        toast.info('Непакована версія не підтримує перевірку оновлень!');
      } else {
        toast.success('Немає оновлень', {
          description: `поточна версія: ${detail.currentVersion} є останньою версією`,
          position: 'top-right',
          richColors: true,
        });
      }
    } catch (error) {
      console.error('Failed to check for updates:', error);
    } finally {
      setUpdateLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        type="button"
        disabled={updateLoading}
        onClick={handleCheckForUpdates}
      >
        <RefreshCcw
          className={`h-4 w-4 mr-2 ${updateLoading ? 'animate-spin' : ''}`}
        />
        {updateLoading ? 'Перевірка...' : 'Перевірити оновлення'}
      </Button>
      {updateDetail?.version && (
        <div className="text-sm text-gray-500">
          {`${updateDetail.currentVersion} -> ${updateDetail.version}(latest)`}
        </div>
      )}
      {updateDetail?.link && (
        <div className="text-sm text-gray-500">
          Примітки до випуску:{' '}
          <a
            href={updateDetail.link}
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            {updateDetail.link}
          </a>
        </div>
      )}
    </>
  );
};
