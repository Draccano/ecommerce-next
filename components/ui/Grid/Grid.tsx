import React, { ReactNode } from 'react'

const Grid: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="root-grid">{children}</div>
}
export default Grid
