import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://dhong9.github.io/">
            Daniel Hong
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}