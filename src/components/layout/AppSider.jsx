import { Layout, Card, Statistic, List, Typography, Tag } from "antd"
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalize } from '../../utils'
import { useContext } from "react";
import CryptoContext from "../../context/crypto-сontext";

const siderStyle = {
    padding: '1rem',
};

const AppSider = () => {
    const { assets } = useContext(CryptoContext)


    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map((asset) => (
                <Card key={asset.id} bordered={false} style={{ marginBottom: '1rem', width: 300 }}>
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
                        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="$"
                    />

                    <List
                        size='small'
                        dataSource={[
                            { title: 'Total Profit', value: asset.totalProfit, withTag: true }, //насколько вышли в плюс
                            { title: 'Asset Amount', value: asset.amount, isPlain: true }, //сколько денег сейчас в крипте
                            // { title: 'Difference', value: asset.growPercent } // разница в процентах
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <span>{item.title}</span>
                                <span>
                                    {item.withTag && (
                                        <Tag color={asset.grow ? 'green' : 'red'}>
                                            {asset.growPercent}%
                                        </Tag>
                                    )}
                                    {item.isPlain && item.value}
                                    {!item.isPlain && (
                                        <Typography.Text type={asset.grow ? 'success' : 'danger'}>
                                            {item.value.toFixed(2)}$
                                        </Typography.Text>
                                    )}
                                </span>
                            </List.Item>
                        )}
                    />
                </Card>)
            )}
        </Layout.Sider >
    )
}

export default AppSider