import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import toast from 'react-hot-toast';

type FlashProps = {
    flash?: {
        't-success'?: string;
        't-error'?: string | string[];
        't-errors'?: string | string[];
        toast?: {
            type: 'success' | 'error' | 'warning' | 'info';
            message: string;
        };
    };
    errors?: Record<string, string | string[]>;
};

export default function FlashMessages() {
    const { flash, errors } = usePage<FlashProps>().props;

    useEffect(() => {
        if (flash?.['t-success']) {
            toast.success(flash['t-success']);
        }

        if (flash?.toast) {
            switch (flash.toast.type) {
                case 'success':
                    toast.success(flash.toast.message);
                    break;
                case 'error':
                    toast.error(flash.toast.message);
                    break;
                default:
                    toast(flash.toast.message);
            }
        }

        const flashErrors = [flash?.['t-error'], flash?.['t-errors']]
            .flatMap((messages) => messages ?? [])
            .concat(Object.values(errors ?? {}).flatMap((messages) => messages));

        for (const message of new Set(flashErrors)) {
            toast.error(message);
        }
    }, [errors, flash]);

    return null;
}