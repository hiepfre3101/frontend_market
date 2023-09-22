
import { Button, Form, Input } from 'antd';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    oldPassword?: string;
    newPassword?: string;
    reNewPassword?: string;
};

const EditPassword = () => {
    return (
        <div>
             
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Mật khẩu hiện tại"
                name="oldPassword"
                rules={[{ required: true, message: 'Please input your oldPassword!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
                label="Mật khẩu mới"
                name="newPassword"
                rules={[{ required: true, message: 'Please input your newPassword!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
                label="Xác nhận mật khẩu mới"
                name="reNewPassword"
                rules={[{ required: true, message: 'Please input your reNewPassword!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Cập nhật
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default EditPassword