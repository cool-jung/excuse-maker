import React,{ useState} from "react";
import {Link} from "react-router-dom";
import { Row, Col, Button, Image, Space} from 'antd';

function CategoryPage(){
    
        const [size, setSize] = useState(50);
    
    return(
        
        
<Row justify="space-around" align="middle" style={{height:700}}>
    <Col span={16} className="alignCenter">
            <Image
                    width={500}
                    src="https://post-phinf.pstatic.net/MjAyMjAyMDlfMjMx/MDAxNjQ0MzgxODQ0NTEw.lcnTfdwDqsqDHqRSP6zkwwoLVMDYz6wCWgrwaQxM2Nwg.6o565_gH6YcMQ7CIkDpujMj6GDcj-SMcaxzwxWGf45cg.JPEG/image_7778370141644381804038.jpg?type=w1200"
                />
    </Col>
    <Col span={16} className="alignCenter">
        <Space size={size}>
            <Button type="primary">
                <Link to="../select/time">시간 약속</Link>
            </Button>  
            <Button type="primary">
                    <Link to="../select/schedule">일정 약속</Link>
            </Button> 
        </Space>
    </Col>
</Row>
    );
}

export default CategoryPage;
