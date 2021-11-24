import { Alert, AlertTitle } from '@mui/material';

type Props = {
  message: string;
  type: 'error' | 'info' | 'success' | 'warning';
}

export const AlertDashBoard: React.FC<Props> = ({
  message,
  type
}): JSX.Element => {
  return (
    <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
      ${message}
    </Alert>
  )
}