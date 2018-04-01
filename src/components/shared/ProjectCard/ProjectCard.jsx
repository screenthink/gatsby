import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'gatsby-link';
import styled from 'styled-components';
// import routes, { routeFor } from 'helpers/routes';
// import { BlogType } from 'types';
import { theme } from 'styles';

const StyledProjectCard = styled(Link)`
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 6px;
  box-shadow: ${theme.boxShadow.small};
  background-color: ${theme.colors.white};
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.navy};
  text-decoration: none;

  &:hover {
    box-shadow: ${theme.boxShadow.big};
  }
`;

const Image = styled.div`
  display: block;
  border-radius: 6px 6px 0px 0px;
  background-size: cover;
  background-position: center top;
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  padding-bottom: 215px;
  width: 100%;
  height: 0;
`;

const Name = styled.div`
  display: block;
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
`;

const DetailWrapper = styled.div`
  padding: 20px 40px;
  height: 150px;
`;

const Cta = styled.div`
  margin: 0 40px 20px;
  font-size: 16px;
  line-height: 16px;
  color: ${theme.colors.blue};
`;

const propTypes = {
  // product: ProductType.isRequired,
  // currency: PropTypes.string.isRequired,
};

const defaultProps = {};

function ProjectCard(props) {
  return (
    <StyledProjectCard to={`/projects/${props.post.slug}`}>
      <Image
        src={props.post.headerBackgroundImage.responsiveResolution.src}
        alt={props.post.heading}
      />
      <DetailWrapper>
        <Name>{props.post.heading}</Name>
      </DetailWrapper>
      <Cta>Read More</Cta>
    </StyledProjectCard>
  );
}

// BlogCard.propTypes = propTypes;
// BlogCard.defaultProps = defaultProps;

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ProjectCard);
