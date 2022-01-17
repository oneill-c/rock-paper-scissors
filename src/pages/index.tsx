import React, { ReactElement, useState } from 'react';

import Layout from '../components/layout';
import Button from '../components/button';
import Modal from '../components/modal';
import classNames from 'classnames';

const IndexPage = (): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    return setIsModalOpen(!isModalOpen);
  };

  const rulesBtnClasses = classNames('absolute', 'mx-auto', 'bottom-14', 'left-1/2', 'md:right-6', 'capitalize');

  return (
    <Layout>
      <Button className={rulesBtnClasses} onClick={toggleModal}>
        Rules
      </Button>
      <Modal title="Rules" open={isModalOpen} onClose={toggleModal} center>
        <img className="mx-auto" src="/assets/images/image-rules.svg" height={300} width={300} />
      </Modal>
    </Layout>
  );
};

export default IndexPage;
