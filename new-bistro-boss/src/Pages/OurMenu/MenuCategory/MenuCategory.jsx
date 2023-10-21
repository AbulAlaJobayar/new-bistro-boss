import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({items,img,title,}) => {
    return (<>
     {
        title&&<Cover img={img} title={title}></Cover>
     }
        <div className='grid md:grid-cols-2 gap-10'>
                {
                    // eslint-disable-next-line react/prop-types
                    items.map((item,id)=><MenuItem
                    key={id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button>Order now</button></Link>
            </>
    );
};

export default MenuCategory;