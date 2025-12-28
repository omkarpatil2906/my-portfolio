import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'


export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <Ring2
                size="40"
                stroke="5"
                strokeLength="0.25"
                bgOpacity="0.1"
                speed="0.8"
                color="#0563BB"
            />
        </div>
    )
}