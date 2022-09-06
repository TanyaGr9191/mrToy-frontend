import { useEffect, useState } from 'react'
import { ToyPreview } from './toy-preview'

export const ToyList = ({ toys, onRemoveToy, history }) => {

    console.log('render toy-list')
    return (
        <div >toy-list
            {toys.map(toy => <ToyPreview key={toy._id} toy={toy} onRemoveToy={onRemoveToy}  />)}
        </div>
        )
}