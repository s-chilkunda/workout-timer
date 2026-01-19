class WakeLockManager {
  private wakeLock: WakeLockSentinel | null = null;
  private isSupported: boolean = false;

  constructor() {
    this.isSupported = 'wakeLock' in navigator;
    if (!this.isSupported) {
      console.log('Wake Lock API is not supported in this browser');
    }
  }

  async requestWakeLock(): Promise<boolean> {
    if (!this.isSupported) {
      return false;
    }

    try {
      this.wakeLock = await navigator.wakeLock.request('screen');
      console.log('Wake Lock acquired');

      this.wakeLock.addEventListener('release', () => {
        console.log('Wake Lock released');
      });

      return true;
    } catch (err) {
      console.log('Wake Lock request failed:', err);
      return false;
    }
  }

  async releaseWakeLock(): Promise<void> {
    if (this.wakeLock) {
      try {
        await this.wakeLock.release();
        this.wakeLock = null;
        console.log('Wake Lock released manually');
      } catch (err) {
        console.log('Error releasing Wake Lock:', err);
      }
    }
  }

  async reacquireOnVisibilityChange(): Promise<void> {
    if (!this.isSupported) return;

    document.addEventListener('visibilitychange', async () => {
      if (document.visibilityState === 'visible' && this.wakeLock === null) {
        await this.requestWakeLock();
      }
    });
  }

  isActive(): boolean {
    return this.wakeLock !== null && !this.wakeLock.released;
  }
}

export const wakeLockManager = new WakeLockManager();
