import { Youtube, Props, Telegram, Twitter } from '@icons-pack/react-simple-icons'
import { FC } from 'react'

export type LinkType = {
  url: string,
  icon: FC<Props> | string,
  color: string,
  fill: string,
  border: string,
  text: string,
  shadow: string,
  id?: string,
  name?: string,
}

export const links: readonly [LinkType, LinkType, LinkType] = [
  {
    url: 'https://www.youtube.com/@gougewaiwang',
    icon: Youtube,
    color: 'from-bg-[#FF0000] to-bg-[#CC0000]',
    fill: 'fill-[#FF0000]',
    border: 'border-[#FF0000]',
    text: 'text-[#FF0000]',
    shadow: 'shadow-red-300',
    id: 'gougewaiwang',
    name: 'YouTube'
  },
  {
    url: 'https://t.me/o2dd3',
    icon: Telegram,
    color: 'from-bg-[#26A5E4] to-bg-[#229ED9]',
    fill: 'fill-[#26A5E4]',
    border: 'border-[#26A5E4]',
    shadow: 'shadow-blue-300',
    text: 'text-[#26A5E4]',
    id: 'o2dd3',
    name: 'Telegram'
  },
  {
    url: 'https://野怪.com',
    icon: Twitter,
    color: 'from-bg-[#1DA1F2] to-bg-[#0d95e8]',
    fill: 'fill-[#1DA1F2]',
    border: 'border-[#1DA1F2]',
    text: 'text-[#1DA1F2]',
    shadow: 'shadow-blue-200',
    id: 'wildmonster',
    name: 'Twitter'
  }
]
