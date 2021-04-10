import { PageContainer } from '@ant-design/pro-layout';
import { Card, Form, Input, Button, Table } from 'antd';
import React, { Component } from 'react';
import styles from './index.less';
import { connect } from 'dva';

// export default function Page() {
//   return (
//     <PageContainer>
//       <Card>
//         <Form className={styles.moreForm}>
//           <Form.Item
//             label="name"
//             name="name"
//             rules={[{ required: true, message: 'pl. input name' }]}
//           >
//             <Input placeholder="input placeholder" />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary">submit</Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </PageContainer>
//   );
// }
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'city',
    key: 'city',
  },
];

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMoreData();
  }

  // 表单提交成功后执行该函数
  onFinish = (value) => {
    // console.log('value', value);
    this.props.getMoreDataBySearch(value);
  };

  // 校验失败 执行该函数
  // onFinishFailed = (err) => {
  //   // console.log('error', err);
  // };

  render() {
    const { data } = this.props.more;
    // console.log(this.props);
    return (
      <PageContainer>
        <Card>
          <Form
            className={styles.moreForm}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true, message: 'pl. input name' }]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
              {/* 在 antd 4 中 使用表单的 onFinish / onFinishFailed 进行表单的提交 */}
              {/* 同时 在 提交 按钮 添加 htmlType="submit" 属性 */}
              <Button type="primary" htmlType="submit">
                submit
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card>
          <Table columns={columns} dataSource={data} rowKey="id" />
        </Card>
      </PageContainer>
    );
  }
}

export default connect(
  // mapStateToProps
  ({ more }) => ({ more }),
  // mapDispatchToProps
  {
    getMoreData: () => ({ type: 'more/getMoreData' }),
    getMoreDataBySearch: (value) => ({ type: 'more/getMoreDataBySearch', payload: value }),
  },
)(More);
