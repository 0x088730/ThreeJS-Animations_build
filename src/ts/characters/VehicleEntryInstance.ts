import * as THREE from 'three';
import { Character } from './Character';

export class VehicleEntryInstance
{
	public character: Character;
	public entryPoint: THREE.Object3D;
	public wantsToDrive: boolean = false;

	constructor(character: Character)
	{
		this.character = character;
	}

	public update(timeStep: number): void
	{
		let entryPointWorldPos = new THREE.Vector3();
		this.entryPoint.getWorldPosition(entryPointWorldPos);
		let viewVector = new THREE.Vector3().subVectors(entryPointWorldPos, this.character.position);
		this.character.setOrientation(viewVector);
		
		let heightDifference = viewVector.y;
		viewVector.y = 0;
	}
}