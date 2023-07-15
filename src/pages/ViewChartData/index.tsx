import { useParams } from '@umijs/max';
import { Card, Col, Divider, message, Row } from 'antd';

import { getChartByIdUsingGET } from '@/services/sumibi/chartController';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';

const AddChart: React.FC = () => {
  const [chart, setChart] = useState<API.Chart>();
  const [option, setOption] = useState<any>();
  const params = useParams();

  // 查看图表数据
  const viewChart = async () => {
    try {
      const res = await getChartByIdUsingGET({
        // @ts-ignore
        id: params.id,
      });
      console.log('图表信息', res);
      if (!res?.data?.genChart) {
        message.error('图表生成失败');
      }
      if (res.data) {
        const chartoptions = JSON.parse(res.data.genChart ?? '');
        console.log(chartoptions);
        if (!chartoptions) {
          message.error('生成图表为空');
          throw new Error('生成图表为空');
        } else {
          setOption(chartoptions);
          setChart(res.data);
          message.success('获取图表成功');
        }
      }
    } catch (e: any) {
      message.error('获取图表成功', e.error);
    }
  };
  useEffect(() => {
    viewChart();
  }, []);
  return (
    <div className="view-chart-data">
      <Row >
        <Col >
          <Divider style={{ color: 'blue' }}>图表信息</Divider>
          <Card style={{ color: 'black' }}>
            <Col>分析目标：{chart?.goal}</Col>
            <Col>图表类型：{chart?.chartType}</Col>
            <Col>图表名称：{chart?.name}</Col>
            <Col>分析时间：{new Date(chart?.createTime).toLocaleString('zh-CN')}</Col>
          </Card>
          <Divider style={{ color: 'blue' }}>可视化图表</Divider>
          <Card>{option ? <ReactECharts option={option} /> : <div>请先在左侧进行提交</div>}</Card>
          <Divider style={{ color: 'blue' }}>分析结论</Divider>
          <Card>
            <div style={{ whiteSpace: 'pre-wrap', overflow: 'auto' }}>
              <p style={{ fontWeight: 'bold', color: '#0b93a1', textAlign: 'left' }}>
                {chart?.genResult ?? <div>请先在左侧进行提交</div>}
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default AddChart;