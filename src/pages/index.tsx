import * as React from 'react';
import { Redirect } from 'react-router-dom';

interface IOwnProps {}

const Home: React.FC<IOwnProps> = () => <Redirect to="/blog" />;

export default Home;
