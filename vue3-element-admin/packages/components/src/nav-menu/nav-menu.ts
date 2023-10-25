import { ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup, MenuItemRegistered } from 'element-plus'
import { Component, PropType, defineComponent, h } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'

interface NavMenuItem{
  title: string
  index: string
  group?: boolean
  slot?: string
  children?: NavMenuItem[]
  disabled?: boolean,

  //subMenu Attributes
  popperClass?: string
  showTimeout?: number
  hideTimeout?: number
  teleported?: boolean
  popperOffset?: number
  
  //MenuItem Attributes
  route?: RouteLocationNormalizedLoaded
  onClick: (item: MenuItemRegistered) => void
}

export interface NavMenuProps {
  data: NavMenuItem[]
}

export default defineComponent({
  components: { ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup },
  props: {
    data: {
      type: Object as PropType<NavMenuProps['data']>,
      default: () => ([])
    }
  },
  setup(props, { slots }) {
    function generateMenuTree(menus: NavMenuItem[]): Component[] {
      const components: Component[] = []
      for (const menu of menus) {
        const titleSlot = () => {
          const slot = menu.slot ? slots[menu.slot] : undefined
          if (slot) {
            return slot()
          }
          return menu.title
        }
       
        if (menu.children && menu.children.length > 0) {
          const subMenus = generateMenuTree(menu.children)
          const defaultSlot = () => subMenus
          if (menu.group) {
            components.push(h(ElMenuItemGroup, null, { default: defaultSlot, title: titleSlot }))
          } else {
            components.push(
              h(ElSubMenu, 
                { 
                  index: menu.index,
                  popperClass: menu.popperClass,
                  showTimeout: menu.showTimeout,
                  hideTimeout: menu.hideTimeout,
                  teleported: menu.teleported,
                  popperOffset: menu.popperOffset,
                },
                { default: defaultSlot, title: titleSlot }
              ),
            )
          }
        } else {
          components.push(
            h(ElMenuItem,
              { 
                index: menu.index,
                route: menu.route,
                disabled: menu.disabled,
                onClick: menu.onClick,
              },
              { title: titleSlot },
            ),
          )
        }
      }
      return components
    }
    return () => h(ElMenu, {}, { default: () => generateMenuTree(props.data) })
  }
})