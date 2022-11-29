


let openMenu = document.getElementById('openMenuIcon')
let menu = document.getElementById('menuIcon')
let nav = document.querySelector('.nav_overlay');

openMenu.onclick = () => {
  nav.classList.add('hidden')
}
menu.onclick = () => {
  console.log('first')
  nav.classList.remove('hidden')
}



const updateProperties = (elem, state) => {
  elem.style.setProperty('--x', `${state.x}px`)
  elem.style.setProperty('--y', `${state.y}px`)
  elem.style.setProperty('--width', `${state.width}px`)
  elem.style.setProperty('--height', `${state.height}px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)
}

document.querySelectorAll('.cursor').forEach(cursor => {
  let onElement

  const createState = e => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 40,
      height: 40,
      radius: '50%'
    }

    const computedState = {}

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius

      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }

    return {
      ...defaultState,
      ...computedState
    }
  }

  const pos = document.documentElement;
  pos.addEventListener('mousemove', e => {
    const state = createState(e)
    updateProperties(cursor, state)
    pos.style.setProperty('--x', e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY - 200 + 'px');
  });

  document.querySelectorAll("a").forEach(ele => {
    ele.addEventListener('mouseenter', () => {
      cursor.classList.add('link')
    })
    ele.addEventListener('mouseleave', () => {
      cursor.classList.remove('link')
    })
  })

  document.querySelectorAll(".product").forEach(ele => {
    ele.addEventListener('mouseenter', () => {
      cursor.classList.add('hidden')
    })
    ele.addEventListener('mouseleave', () => {
      cursor.classList.remove('hidden')
    })
  })

})



