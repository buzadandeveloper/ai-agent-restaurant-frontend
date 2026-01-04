import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Props {
    title: string;
    description: string;
    variant: 'default' | 'destructive';
};

export const Toast = ({ title, description, variant }: Props) => {
    return (
        <Alert variant={variant} className='w-100'>
            <AlertCircle size={'1.25em'} className='mt-1.5'/>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </Alert>
    );
};