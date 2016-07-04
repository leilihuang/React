# React
写写React组件

<li key={i} className={this.state.treeClass} 
							onClick={this.onClick.bind(this,this.state.treeClass)}>
							
							<div className="title">{d.menuName}</div>	
						</li>
						
if(!d.tree){
								console.log(d.tree);
								<ul className="tree-menu">
									{
										d.childrens.map((d,i) => {
											console.log(d);
											<li className={this.state.tree} key={i} 
												onClick={this.onClick.bind(this,this.state.treeClass)}>{d.menuName}</li>
										})
									}
								</ul>
							}