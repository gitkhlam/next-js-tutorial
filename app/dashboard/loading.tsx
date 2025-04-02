// Этот файл будет работать, когда данные подгружаются, его нужно именовать loading

import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingDashboard() {
    return(
        <Skeleton className='w-full h-[400px]'/>
    )
}