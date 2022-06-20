import { Button, Divider } from '@mui/material'
import { FiFolder } from 'react-icons/fi'
import { Topbar } from '../../components/topbar/Topbar'
import './knowledgeBase.css'

export const KnowledgeBase=()=>{
    return (
        <>
        <Topbar/>
        <div className="knowledgeBase">
            <div className='knowledgeBaseTopContainer'>
                <h2 className='headingText'>Search Knowledge Base Articles</h2>
                <div className='searchContainer'>
                <div className='searchBar'>
                <i class="fa fa-search searchIcon fa-lg" aria-hidden="true"></i>

                <input className='knowledgeBaseInputBox' type="search" placeholder='Have a questin?' />
                </div>
                <Button className='kbsearchButton' variant='contained'>Search</Button>
                </div>
            </div>
            <div className="kbBottomContainer">
                <h2 className='headingText'>Showing search results for:</h2>
                <Divider/>
                <div className='kbBottomContainerSales'>
                  <FiFolder/>
                <h3 className='headingText1'>Sales</h3>

                </div>


                <div>
                    <h3>Gryphon. 'Well, I can't quite follow.</h3>
                    <p>Ut eum animi molestiae tempora corporis quia. Excepturi repellat quo tempore culpa assumenda.Odit dolor error et tenetur. Omnis esse sint minus veniam a illo et. Recusandae iure repellat est est molestiae consequatur natus. Illo et et in ipsa....</p>
                </div>
                <div>
                    <h3>Gryphon. 'Well, I can't quite follow.</h3>
                    <p>Ut eum animi molestiae tempora corporis quia. Excepturi repellat quo tempore culpa assumenda.Odit dolor error et tenetur. Omnis esse sint minus veniam a illo et. Recusandae iure repellat est est molestiae consequatur natus. Illo et et in ipsa....</p>
                </div>
                <div>
                    <h3>Gryphon. 'Well, I can't quite follow.</h3>
                    <p>Ut eum animi molestiae tempora corporis quia. Excepturi repellat quo tempore culpa assumenda.Odit dolor error et tenetur. Omnis esse sint minus veniam a illo et. Recusandae iure repellat est est molestiae consequatur natus. Illo et et in ipsa....</p>
                </div>
                <div>
                    <h3>Gryphon. 'Well, I can't quite follow.</h3>
                    <p>Ut eum animi molestiae tempora corporis quia. Excepturi repellat quo tempore culpa assumenda.Odit dolor error et tenetur. Omnis esse sint minus veniam a illo et. Recusandae iure repellat est est molestiae consequatur natus. Illo et et in ipsa....</p>
                </div>
                <div>
                    <h3>Gryphon. 'Well, I can't quite follow.</h3>
                    <p>Ut eum animi molestiae tempora corporis quia. Excepturi repellat quo tempore culpa assumenda.Odit dolor error et tenetur. Omnis esse sint minus veniam a illo et. Recusandae iure repellat est est molestiae consequatur natus. Illo et et in ipsa....</p>
                </div>
            </div>
        </div>
        </>
    )
}