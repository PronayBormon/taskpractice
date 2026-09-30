import { createInertiaApp } from '@inertiajs/react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { Toaster } from 'react-hot-toast';
import FlashMessages from './components/FlashMessages';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

function FlashMessagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <FlashMessages />
            {children}
        </>
    );
}

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    layout: (name) => {
        switch (true) {
            case name === 'welcome':
                return FlashMessagesLayout;

            case name.startsWith('auth/'):
                return [FlashMessagesLayout, AuthLayout];

            case name.startsWith('backend/'):
                return [FlashMessagesLayout, AppLayout];

            case name.startsWith('settings/'):
                return [FlashMessagesLayout, AppLayout, SettingsLayout];

            default:
                return null;
        }
    },

    strictMode: true,

    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}

                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </TooltipProvider>
        );
    },

    progress: {
        color: '#FF0000',
    },
});

initializeTheme();