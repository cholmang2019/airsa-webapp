import React, { useState } from 'react';
import { Download, Smartphone, X, Share, PlusSquare } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'header' | 'banner' | 'footer';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'header',
  className = '',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // If already installed as PWA or dismissed in banner mode, hide
  if (isInstalled || isDismissed) {
    return null;
  }

  // If neither installable nor iOS, return null
  if (!isInstallable && !isIOS) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
    } else {
      await install();
    }
  };

  // Header compact button variant
  if (variant === 'header') {
    return (
      <>
        <button
          onClick={handleInstallClick}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-400/50 text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm shadow-amber-500/5 whitespace-nowrap ${className}`}
          title="نصب اپلیکیشن ایرسا سیمرغ روی گوشی"
          aria-label="نصب اپلیکیشن"
        >
          <Smartphone className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">نصب اپلیکیشن</span>
          <span className="sm:hidden">نصب</span>
        </button>

        {/* iOS installation guidance modal */}
        {showIOSGuide && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowIOSGuide(false)}
            dir="rtl"
          >
            <div
              className="w-full max-w-sm rounded-2xl bg-[#0d1322] border border-amber-500/30 p-6 text-white shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-sm sm:text-base text-amber-300">راهنمای نصب روی آیفون (iOS)</h3>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    ۱
                  </span>
                  <p className="flex items-center gap-1.5 flex-wrap">
                    در مرورگر سافاری روی دکمه <Share className="w-4 h-4 text-sky-400 inline" /> <strong>Share</strong> (اشتراک‌گذاری) در پایین صفحه بزنید.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    ۲
                  </span>
                  <p className="flex items-center gap-1.5 flex-wrap">
                    به پایین اسکرول کرده و گزینه <PlusSquare className="w-4 h-4 text-emerald-400 inline" /> <strong>Add to Home Screen</strong> را لمس کنید.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    ۳
                  </span>
                  <p>در گوشه بالا دکمه <strong>Add</strong> را بزنید تا آیکون برنامه به صفحه اصلی شما افزوده شود.</p>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
              >
                متوجه شدم
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Mobile smart banner variant (sticks cleanly at bottom if prompted)
  return (
    <>
      <div
        className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 p-4 rounded-2xl bg-[#0d1322]/95 backdrop-blur-md border border-amber-500/30 text-white shadow-2xl flex items-center justify-between gap-3 ${className}`}
        dir="rtl"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0">
            <Smartphone className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex flex-col text-right">
            <h4 className="text-xs sm:text-sm font-bold text-white">نصب اپلیکیشن ایرسا سیمرغ</h4>
            <p className="text-[11px] text-slate-400">دسترسی سریع، آفلاین و تمام‌صفحه روی گوشی</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleInstallClick}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>نصب</span>
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
            aria-label="بستن اعلان"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {showIOSGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowIOSGuide(false)}
          dir="rtl"
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-[#0d1322] border border-amber-500/30 p-6 text-white shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-sm sm:text-base text-amber-300">راهنمای نصب روی آیفون (iOS)</h3>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  ۱
                </span>
                <p className="flex items-center gap-1.5 flex-wrap">
                  در سافاری روی دکمه <Share className="w-4 h-4 text-sky-400 inline" /> <strong>Share</strong> در نوار پایین بزنید.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  ۲
                </span>
                <p className="flex items-center gap-1.5 flex-wrap">
                  گزینه <PlusSquare className="w-4 h-4 text-emerald-400 inline" /> <strong>Add to Home Screen</strong> را انتخاب کنید.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  ۳
                </span>
                <p>در بالا دکمه <strong>Add</strong> را بزنید تا برنامه به صفحه گوشی شما اضافه شود.</p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      )}
    </>
  );
};
