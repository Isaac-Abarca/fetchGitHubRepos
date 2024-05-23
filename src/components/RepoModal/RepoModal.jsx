/* eslint-disable react/prop-types */
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const RepoModal = ({ repo, closeModal }) => (
  <Dialog open={Boolean(repo)} onClose={closeModal} maxWidth="md" fullWidth>
    <DialogTitle>
      {repo.name}
      <IconButton
        aria-label="close"
        onClick={closeModal}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers>
      <Typography variant="body1" gutterBottom>
        {repo.description || 'No description available'}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
        <Chip
          label={`Lenjuages: ${repo.language || 'N/A'}`}
          color="primary"
          variant="outlined"
        />
        <Chip
          label={`Estrellas: ${repo.stargazers_count || 'N/A'}`}
          color="primary"
          variant="outlined"
        />
        <Chip
          label={`Forks: ${repo.forks_count || 'N/A'}`}
          color="primary"
          variant="outlined"
        />
        <Chip
          label={`Creado: ${new Date(repo.created_at).toLocaleDateString() || 'N/A'}`}
          color="primary"
          variant="outlined"
        />
        <Chip
          label={`Ultima actialización: ${new Date(repo.updated_at).toLocaleDateString() || 'N/A'}`}
          color="primary"
          variant="outlined"
        />
      </Box>
    </DialogContent>
    <DialogActions>
      <Button
        variant="contained"
        color="primary"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Repository
      </Button>
      <Button onClick={closeModal} color="secondary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default RepoModal;