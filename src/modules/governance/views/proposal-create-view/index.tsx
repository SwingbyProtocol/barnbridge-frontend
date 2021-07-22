import { FC, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import cn from 'classnames';

import Input from 'components/antd/input';
import Textarea from 'components/antd/textarea';
import { Form, FormItem, useForm } from 'components/custom/form';
import Icon from 'components/custom/icon';
import { Spinner } from 'components/custom/spinner';
import { Text } from 'components/custom/typography';
import { executeFetch } from 'hooks/useFetch';
import useMergeState from 'hooks/useMergeState';
import { APIProposalEntity } from 'modules/governance/api';
import { useDAO } from 'modules/governance/providers/daoProvider';
import { useConfig } from 'providers/configProvider';
import { useWallet } from 'wallets/walletProvider';

import CreateProposalActionModal, { CreateProposalActionForm } from '../../components/create-proposal-action-modal';
import DeleteProposalActionModal from '../../components/delete-proposal-action-modal';

import s from './s.module.scss';

type NewProposalForm = {
  title: string;
  description: string;
  actions: CreateProposalActionForm[];
};

type ProposalCreateViewState = {
  hasActiveProposal?: boolean;
  showCreateActionModal: boolean;
  showDeleteActionModal: boolean;
  selectedAction?: CreateProposalActionForm;
  submitting: boolean;
};

const InitialState: ProposalCreateViewState = {
  hasActiveProposal: undefined,
  showCreateActionModal: false,
  showDeleteActionModal: false,
  selectedAction: undefined,
  submitting: false,
};

type FormType = {
  title: string;
  description: string;
};

const ProposalCreateView: FC = () => {
  const config = useConfig();
  const history = useHistory();
  const daoCtx = useDAO();
  const wallet = useWallet();

  const form = useForm<FormType>({
    defaultValues: {
      title: '',
      description: '',
    },
    validationScheme: {
      title: {
        rules: {
          required: true,
          minLength: 3,
        },
        messages: {
          required: 'Value is required.',
          minLength: 'Should be at least 3 characters.',
        },
      },
      description: {
        rules: {
          required: true,
          minLength: 3,
        },
        messages: {
          required: 'Value is required.',
          minLength: 'Should be at least 3 characters.',
        },
      },
    },
    onSubmit: async values => {
      setSubmitting(true);

      try {
        await daoCtx.daoGovernance.propose(values.title, values.description, [], [], [], [], 1);
      } catch (e) {
        console.error(e);
      }

      setSubmitting(false);
    },
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [isCreateActionModal, showCreateActionModal] = useState(false);

  const { formState, watch } = form;

  const [state, setState] = useMergeState<ProposalCreateViewState>(InitialState);

  function fetchProposal(proposalId: number): Promise<APIProposalEntity> {
    const url = new URL(`/api/governance/proposals/${proposalId}`, config.api.baseUrl);
    return executeFetch<APIProposalEntity>(url);
  }

  function handleBackClick() {
    history.push('/governance/proposals');
  }

  function handleCreateAction(payload: CreateProposalActionForm) {
    // let actions = form.getFieldValue('actions');
    //
    // if (state.selectedAction) {
    //   actions = actions.map((action: CreateProposalActionForm) => (action === state.selectedAction ? payload : action));
    // } else {
    //   actions.push(payload);
    // }
    //
    // form.setFieldsValue({
    //   actions,
    // });
  }

  function handleActionDelete() {
    const { selectedAction } = state;

    if (selectedAction) {
      // form.setFieldsValue({
      //   actions: form.getFieldValue('actions').filter((action: CreateProposalActionForm) => action !== selectedAction),
      // });
    }

    setState({
      showDeleteActionModal: false,
      selectedAction: undefined,
    });
  }

  async function handleSubmit(values: NewProposalForm) {
    // setState({ submitting: true });
    //
    // try {
    //   await form.validateFields();
    //
    //   const payload = {
    //     title: values.title,
    //     description: values.description,
    //     ...values.actions.reduce(
    //       (a, c) => {
    //         if (!c.targetAddress) {
    //           return a;
    //         }
    //
    //         a.targets.push(c.targetAddress);
    //
    //         if (c.addFunctionCall) {
    //           a.signatures.push(c.functionSignature!);
    //           a.calldatas.push(c.functionEncodedParams || '0x');
    //         } else {
    //           a.signatures.push('');
    //           a.calldatas.push('0x');
    //         }
    //
    //         if (c.addValueAttribute) {
    //           a.values.push(c.actionValue!);
    //         } else {
    //           a.values.push('0');
    //         }
    //
    //         return a;
    //       },
    //       {
    //         targets: [] as string[],
    //         signatures: [] as string[],
    //         calldatas: [] as string[],
    //         values: [] as string[],
    //       },
    //     ),
    //   };
    //
    //   const proposalId = await daoCtx.daoGovernance.propose(
    //     payload.title,
    //     payload.description,
    //     payload.targets,
    //     payload.values,
    //     payload.signatures,
    //     payload.calldatas,
    //     1,
    //   ); /// TODO: GAS PRICE
    //
    //   await waitUntil(() => fetchProposal(proposalId), { intervalBetweenAttempts: 3_000, timeout: Infinity });
    //
    //   form.resetFields();
    //   history.push(`/governance/proposals/${proposalId}`);
    // } catch (e) {
    //   console.error(e);
    // }
    //
    // setState({ submitting: false });
  }

  useEffect(() => {
    // daoCtx.actions.hasActiveProposal().then(hasActiveProposal => {
    //   setState({ hasActiveProposal });
    // });
  }, [wallet.account]);

  if (!wallet.initialized) {
    return null;
  }

  if (!wallet.isActive) {
    return <Redirect to="/governance/proposals" />;
  }

  const hasCreateRestrictions = true; // TODO: state.hasActiveProposal !== undefined && daoCtx.actions.hasThreshold() !== undefined;

  if (daoCtx.isActive === undefined || !hasCreateRestrictions) {
    return null;
  }

  const canCreateProposal = true; // TODO: state.hasActiveProposal === false && daoCtx.actions.hasThreshold() === true;

  if (!daoCtx.isActive || !canCreateProposal) {
    return <Redirect to="/governance/proposals" />;
  }

  return (
    <div className="container-limit">
      <div className="mb-16">
        <button type="button" className="button-text" onClick={handleBackClick}>
          <Icon name="arrow-back" width={16} height={16} className="mr-8" color="inherit" />
          Proposals
        </button>
      </div>
      <Text type="h1" weight="bold" color="primary" className="mb-16">
        Create Proposal
      </Text>
      <Form form={form} disabled={isSubmitting}>
        <div className={cn(s.cardsContainer, 'mb-40')}>
          <div className="card">
            <div className="card-header">
              <Text type="p1" weight="semibold" color="primary">
                Proposal description
              </Text>
            </div>
            <div className="flex flow-row row-gap-24 p-24">
              <FormItem name="title" label="Title">
                {({ field }) => (
                  <Input
                    placeholder="Proposal title"
                    disabled={state.submitting}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              </FormItem>
              <FormItem
                name="description"
                label="Description"
                labelProps={{
                  hint:
                    'Be careful with the length of the description, this will eventually have to be stored on chain and the gas needed might make the proposal creation transaction more expensive.',
                }}>
                {({ field }) => (
                  <Textarea
                    placeholder="Please enter the goal of this proposal here"
                    rows={6}
                    disabled={state.submitting}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              </FormItem>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <Text type="p1" weight="semibold" color="primary">
                Actions
              </Text>
            </div>
            <div className="p-24">
              {/*<Form.List*/}
              {/*  name="actions"*/}
              {/*  rules={[*/}
              {/*    {*/}
              {/*      validator: (_, value: StoreValue) => {*/}
              {/*        return value.length === 0 ? Promise.reject() : Promise.resolve();*/}
              {/*      },*/}
              {/*      message: 'At least one action is required!',*/}
              {/*    },*/}
              {/*    {*/}
              {/*      validator: (_, value: StoreValue) => {*/}
              {/*        return value.length > 10 ? Promise.reject() : Promise.resolve();*/}
              {/*      },*/}
              {/*      message: 'Maximum 10 actions are allowed!',*/}
              {/*    },*/}
              {/*  ]}>*/}
              {/*  {(fields, _, { errors }) => (*/}
              {/*    <>*/}
              {/*      {fields.map((field, index) => {*/}
              {/*        const fieldData: CreateProposalActionForm = form.getFieldValue(['actions', index]);*/}
              {/*        const { targetAddress, functionSignature, functionEncodedParams } = fieldData;*/}

              {/*        return (*/}
              {/*          <Form.Item key={field.key} noStyle>*/}
              {/*            <ProposalActionCard*/}
              {/*              className="mb-24"*/}
              {/*              title={`Action ${index + 1}`}*/}
              {/*              target={targetAddress}*/}
              {/*              signature={functionSignature!}*/}
              {/*              callData={functionEncodedParams!}*/}
              {/*              showSettings*/}
              {/*              onDeleteAction={() => {*/}
              {/*                setState({*/}
              {/*                  showDeleteActionModal: true,*/}
              {/*                  selectedAction: fieldData,*/}
              {/*                });*/}
              {/*              }}*/}
              {/*              onEditAction={() => {*/}
              {/*                setState({*/}
              {/*                  showCreateActionModal: true,*/}
              {/*                  selectedAction: fieldData,*/}
              {/*                });*/}
              {/*              }}*/}
              {/*            />*/}
              {/*          </Form.Item>*/}
              {/*        );*/}
              {/*      })}*/}

              {/*      {fields.length < 10 && (*/}
              {/*        <Button*/}
              {/*          type="ghost"*/}
              {/*          icon={<Icon name="plus-circle-outlined" color="inherit" />}*/}
              {/*          disabled={state.submitting}*/}
              {/*          className={s.addActionBtn}*/}
              {/*          onClick={() => setState({ showCreateActionModal: true })}>*/}
              {/*          Add new action*/}
              {/*        </Button>*/}
              {/*      )}*/}

              {/*      {fields.length >= 10 && <Alert type="info" message="Maximum 10 actions are allowed." />}*/}

              {/*      <AntdForm.ErrorList errors={errors} />*/}
              {/*    </>*/}
              {/*  )}*/}
              {/*</Form.List>*/}
              <button type="button" className="button-ghost" onClick={() => showCreateActionModal(true)}>
                <Icon name="plus-circle-outlined" className="mr-4" color="inherit" />
                Add new action
              </button>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="button-primary button-big">
            {isSubmitting && <Spinner className="mr-8" />}
            Create proposal
          </button>
        </div>
      </Form>

      {isCreateActionModal && (
        <CreateProposalActionModal
          edit={state.selectedAction !== undefined}
          actions={[]}
          initialValues={state.selectedAction}
          onCancel={() =>
            showCreateActionModal(false)
          }
          onSubmit={handleCreateAction}
        />
      )}

      {state.showDeleteActionModal && (
        <DeleteProposalActionModal
          onCancel={() =>
            setState({
              showDeleteActionModal: false,
              selectedAction: undefined,
            })
          }
          onOk={handleActionDelete}
        />
      )}
    </div>
  );
};

export default ProposalCreateView;
