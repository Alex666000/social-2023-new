import React, {ComponentType} from 'react'
import {Preloader} from '../components/common/Preloader/Preloader';

/*type MapStateToPropsType = {
    // isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    // isAuth: state.auth.isAuth
})*/

export function withSuspense<T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <React.Suspense
            fallback={<div><Preloader/></div>}> <Component {...props}/>
        </React.Suspense>

    }
}

