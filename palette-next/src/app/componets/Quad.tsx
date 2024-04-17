import { ReactNode } from "react"

interface colors {
    backgroundColor: string,
    textColor: string,
    anchorColor: string,
    buttonColor: string,
    blob1Color: string,
    blob2Color: string
}

const Quad = (params: colors) : ReactNode =>{
    return(
        <div className="quad-container">
            <div className="quad" style={{
            backgroundColor: params.backgroundColor
        }}>
                <div className="quad-content">
                    <h1>GITHUBs</h1>

                    <a href="https://github.com/chrysthian/up">Github.com</a>

                    <button></button>

                    <div className="blob-1"></div>
                    <div className="blob-2"></div>
                </div>
            </div>
        </div>
    )

}
export default Quad;