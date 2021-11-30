import styled from 'styled-components';

export const SpotifyArtist = () => {
  return (
    <Container>
      <iframe
        title="spotify-artist"
        src="https://open.spotify.com/embed/artist/2ubn2zwyYaLdHOCKnTouU2"
        width="100%"
        height="380"
        allow="encrypted-media"
      ></iframe>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
