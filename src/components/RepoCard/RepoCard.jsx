/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import truncateText from '../../utils/truncateText';
import './RepoCard.css';

const RepoCard = ({ repo, openModal }) => (
  <Card className="repo-card" elevation={3}>
    <CardContent>
      <Typography variant="h5" component="div">
        {repo.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="description">
        {truncateText(repo.description, 50)}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => openModal(repo)}>
        View More
      </Button>
    </CardActions>
  </Card>
);

export default RepoCard;