import React from 'react';
import { Result } from 'antd';

const PageNotFound = () => (
  <Result
    status="404" // Set the status to 404 to display a 404 error page
    title="404" // The title to be displayed on the page
    subTitle="Sorry, the page you visited does not exist." // The subtitle or additional message displayed below the title
  />
);

export default PageNotFound;
