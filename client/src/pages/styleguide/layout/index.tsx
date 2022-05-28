import React from 'react'
import styled from 'styled-components'

const list = [
    `<div class="container">
<div class="row">
  <div class="col-sm">
    One of three columns
  </div>
  <div class="col-sm">
    One of three columns
  </div>
  <div class="col-sm">
    One of three columns
  </div>
</div>
</div>
`,
    `<div class="container">
<div class="row">
  <div class="col">
    1 of 2
  </div>
  <div class="col">
    2 of 2
  </div>
</div>
<div class="row">
  <div class="col">
    1 of 3
  </div>
  <div class="col">
    2 of 3
  </div>
  <div class="col">
    3 of 3
  </div>
</div>
</div>`,
`<div class="container">
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
<div class="row">
  <div class="col-8">col-8</div>
  <div class="col-4">col-4</div>
</div>
</div>`,
`<div class="container">
<div class="row">
  <div class="col-sm-8">col-sm-8</div>
  <div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
</div>
</div>`
]
const Layout = () => {
    return (
        <TheLayout>
            <div className="container">

                <div className='mt-4  card1'>
                    <div className='' >
                        <img src="/images/bootstrap.png"
                            width="100"
                            height="100"
                            alt="Bootstrap"
                        />
                    </div>
                    <div className='a' >
                        <a href="https://getbootstrap.com/docs/5.2/utilities/flex/#content">
                            Used Bootstrap grid  System For Layout
                        </a>
                    </div>

                </div>

                <h2 className="my-4">Row and Columns</h2>

                <div className='row pb-4'>
                    <div className='col-6 codes' >
                        <CodeBlock onClick={() => navigator.clipboard.writeText(list[0])}>
                            <pre>
                                {list[0]}
                            </pre>
                            <span>Click to copy code</span>

                        </CodeBlock>
                    </div>
                    <div className='col-6 codes'>
                        <CodeBlock onClick={() => navigator.clipboard.writeText(list[1])}>
                            <pre>
                                {list[1]}
                            </pre>
                            <span>Click to copy code</span>

                        </CodeBlock>
                    </div>
                </div>
                <div className='row mt-4 pb-4'>
                    <div className='col codes'>
                        <CodeBlock onClick={() => navigator.clipboard.writeText(list[2])}>
                            <pre>
                                {list[2]}
                            </pre>
                            <span>Click to copy code</span>

                        </CodeBlock>
                    </div>
                    <div className='col codes'>
                        <CodeBlock onClick={() => navigator.clipboard.writeText(list[3])}>
                            <pre>
                                {list[3]}
                            </pre>
                            <span>Click to copy code</span>

                        </CodeBlock>
                    </div>
                </div>

            </div>
        </TheLayout>
    )
}

export default Layout


const TheLayout = styled.div`
.card1{
    border-radius: 7px;
    background-color: ${({ theme }) => theme.pellete.primary};
    padding: 20px;
    display: flex;
    align-items: center;
    color:${({ theme }) => theme.pellete.secondary};
    font-size: 18px;

    .a{
        margin-left: 20px;
    }

}
    
    h2{
        font-size: 24px;
    }
    a{
        display: inline-block;
    }

    
`

const CodeBlock = styled.div`
    background: white;
    border: 1px solid rgb(224, 224, 224);
    /* margin-right: 10px; */
    /* margin-top: 20px; */
    white-space: pre; 
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    /* padding  :10px ; */
pre{
    margin-left: 20px;
    margin-top: 10px;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
   
    /* padding: 20px 40px; */
    
    

    
}
&:hover span{
        display: flex;
    }

    span{
        display: none;
        align-items: center;
        justify-content: center;
        position: absolute;
        top:0;
        height: 100%;
        width: 100%;
        text-align: center;
        background-color: #615d5dbe;
        color:${({ theme }) => theme.pellete.primary};
        font-size: 16px;
    }
`